###
 # @FileDescription: 上传、发布脚本的文件
 # @Author: zsf
 # @Date: 2021-11-25 10:23:25
 # @LastEditors: zsf
 # @LastEditTime: 2021-11-25 11:40:06
### 
# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
yarn run docs:build

# 进入打包好的文件夹
cd docs/.vuepress/dist

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'deploy'

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git push -f git@github.com:linktoword/linktoword.github.io.git master

cd -
