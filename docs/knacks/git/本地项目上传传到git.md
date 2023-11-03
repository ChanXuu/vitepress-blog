1. 将终端路径指向文件夹内
2. 执行命令`git init`(如果仓库没有分支,则加上`--initial-branch=master`) ,在文件夹会生成`.git` 的隐藏文件夹
3. 输入命令 `git remote add origin` + 仓库路径,
4. 继续输入 `git add .`,表示把全部文件保存到缓存区
5. 输入 `git commit -m '新添加的文件内容描述'` 添加文件描述
6. 如果仓库有文件的话,则需要先合并,使用`git pull --rebase origin master`
7. 输入 `git push -u origin master`(或`git push -u origin master -f`强制上传) 上传文件到 git
