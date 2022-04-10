## Build Setup 

```bash
# Install dependencies
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# Serve with hot reload at localhost:9528
npm run dev
```

# 项目简介

谷粒学院，是一个B2C模式的职业技能在线教育系统，分为前台用户系统和后台运营平台。

- 谷粒学院后台接口请参考：https://github.com/wenMN1994/GrainOnlineEducation_Parent.git
- 谷粒学院后台管理UI请参考：https://github.com/wenMN1994/GrainOnlineEducation_Admin.git
- 谷粒学院前台UI请参考：https://github.com/wenMN1994/GrainOnlineEducation_Web.git

# 一、功能简介

谷粒学院，是一个B2C模式的职业技能在线教育系统，分为前台用户系统和后台运营平台。

# 二、系统模块

<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314174755805.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/>
      	</td>
    </tr>        
</table>


# 三、系统架构

**架构设计需要考虑的几个方面：**

- **性能：**主要考虑访问频率，每个用户每天的访问次数。项目初始阶段用户的访问量并不大，如果考虑做运营推广，可能会迎来服务器访问量骤增，因此要考虑**分布式部署，引入缓存**

- **可扩展性：**系统功能会随着用户量的增加以及多变的互联网用户需求不断地扩展，因此考虑到系统的可扩展性的要求需要**使用微服务架构，引入消息中间件**

- **高可用：**系统一旦宕机，将会带来不可挽回的损失，因此必须做负载均衡，甚至是异地多活这类复杂的方案。如果数据丢失，修复将会非常麻烦，只能靠人工逐条修复，这个很难接受，因此需要考虑存储高可靠。我们需要考虑多种异常情况：机器故障、机房故障，针对机器故障，我们需要设计 MySQL 同机房主备方案；针对机房故障，我们需要设计 MySQL 跨机房同步方案。

- **安全性：**系统的信息有一定的隐私性，例如用户的个人身份信息，不包含强隐私（例如玉照、情感）的信息，因此使用账号密码管理、数据库访问权限控制即可。

- **成本：**视频类网站的主要成本在于服务器成本、流量成本、存储成本、流媒体研发成本，中小型公司可以考虑使用云服务器和云服务。

  

<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314174813599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>        
</table>

# 四、项目结构

<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314180753236.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314181901394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr> 
</table>





# 效果图

<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314181540634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314181406128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314181436204.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314181500673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191228208.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314192146196.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191245350.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314192417849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314181540634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314191305200.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191325241.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314191400367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191416449.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314191434263.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191533613.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314191653808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr>  
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314191708416.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
        <td><img src="https://img-blog.csdnimg.cn/20200314191611311.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
    </tr> 
</table>

