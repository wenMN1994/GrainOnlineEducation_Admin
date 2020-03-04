<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新课程</h2>

    <el-steps :active="1" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="提交审核"/>
    </el-steps>

    <el-form label-width="120px">

      <el-form-item label="课程标题">
        <el-input v-model="courseInfo.eduCourse.title" placeholder=" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"/>
      </el-form-item>

      <!-- 所属分类 TODO -->
      <!-- 一级分类 -->
      <el-form-item label="课程类别">
        <el-select
          v-model="courseInfo.eduCourse.subjectParentId"
          placeholder="请选择"
          @change="subjectLevelOneChanged">
          <el-option
            v-for="subject in subjectNestedList"
            :key="subject.id"
            :label="subject.title"
            :value="subject.id"/>
        </el-select>
        <!-- 二级分类 -->
        <el-select v-model="courseInfo.eduCourse.subjectId" placeholder="请选择">
          <el-option
            v-for="subject in subSubjectList"
            :key="subject.value"
            :label="subject.title"
            :value="subject.id"/>
        </el-select>
      </el-form-item>

      <!-- 课程讲师 TODO -->
      <!-- 课程讲师 -->
      <el-form-item label="课程讲师">
        <el-select
          v-model="courseInfo.eduCourse.teacherId"
          placeholder="请选择">
          <el-option
            v-for="teacher in teacherList"
            :key="teacher.id"
            :label="teacher.name"
            :value="teacher.id"/>
        </el-select>
      </el-form-item>

      <el-form-item label="总课时">
        <el-input-number :min="0" v-model="courseInfo.eduCourse.lessonNum" controls-position="right" placeholder="请填写课程的总课时数"/>
      </el-form-item>

      <!-- 课程简介 TODO -->
      <!-- 课程简介-->
      <el-form-item label="课程简介">
        <tinymce :height="300" v-model="courseInfo.eduCourseDesc.description"/>
      </el-form-item>

      <!-- 课程封面 TODO -->
      <!-- 课程封面-->
      <el-form-item label="课程封面">

        <el-upload
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :action="BASE_API+'/oss/file/upload?host=cover'"
          class="avatar-uploader">
          <img :src="courseInfo.eduCourse.cover">
        </el-upload>

      </el-form-item>

      <el-form-item label="课程价格">
        <el-input-number :min="0" v-model="courseInfo.eduCourse.price" controls-position="right" placeholder="免费课程请设置为0元"/> 元
      </el-form-item>

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="next">保存并下一步</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import course from '@/api/edu/course.js'
import subject from '@/api/edu/subject.js'
import teacher from '@/api/edu/teacher.js'
import Tinymce from '@/components/Tinymce'

const eduCourse = {
  title: '',
  subjectId: '', // 课程二级分类
  teacherId: '',
  lessonNum: 0,
  cover: process.env.OSS_PATH + '/cover/default.jpg',
  price: 0,
  subjectParentId: '' // 课程一级分类
}

const eduCourseDesc = {
  description: ''
}
export default {
  components: { Tinymce },
  data() {
    return {
      courseInfo: { eduCourse, eduCourseDesc },
      saveBtnDisabled: false, // 保存按钮是否禁用
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      teacherList: [], // 讲师列表
      BASE_API: process.env.BASE_API // 接口API地址
    }
  },
  // 当路由发生变化的时候，我们应该有一个监听，监听获取参数
  watch: {
    $route(to, from) {
      console.log('watch $route')
      this.init()
    }
  },
  created() {
    console.log('info created')
    // 初始化
    this.init()
  },

  methods: {
    init() {
      this.initSubjectList()
      // 获取讲师列表
      this.initTeacherList()
    },
    initTeacherList() {
      teacher.getList()
        .then(response => {
          this.teacherList = response.data.items
        })
    },
    initSubjectList() {
      subject.getNestedTreeList()
        .then(response => {
          this.subjectNestedList = response.data.subjectList
        })
    },
    subjectLevelOneChanged(value) {
      console.log(value)
      for (let i = 0; i < this.subjectNestedList.length; i++) {
        if (this.subjectNestedList[i].id === value) {
          this.subSubjectList = this.subjectNestedList[i].children
          this.courseInfo.eduCourse.subjectId = ''
        }
      }
    },
    // 上传封面后成功回调的方法
    handleAvatarSuccess(res, file) {
      console.log(res)// 上传响应
      console.log(URL.createObjectURL(file.raw))// base64编码
      this.courseInfo.eduCourse.cover = res.data.url
    },
    // 上传封面之前校验方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    next() {
      console.log('next')
      course.saveCourseInfo(this.courseInfo)
        .then(response => {
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.$router.push({ path: '/course/chapter/' + response.data.id })
        })
        .catch(response => {
          this.$message({
            type: 'error',
            message: '保存失败'
          })
          this.$router.push({ path: '/course/chapter/' + response.data.id })
        })
    }
  }
}
</script>
<style scoped>
.tinymce-container {
  line-height: 29px;
}
</style>
