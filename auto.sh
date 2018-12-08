#/bin/bash

# https://stackoverflow.com/questions/42308064/check-for-flag-passed-to-a-bash-script-and-process-value
while getopts ":r" opt; do
 case $opt in
 r)
    echo "reseting test-dir" &&
    [ -e test-dir ] && rm -rf test-dir &&
    vue create test-dir -d
    ;;
 \?)
    echo $opt
    echo "starting to install"
    ;;
 esac
done


(
    cd test-dir && 
   #  npm uninstall ../
    npm install --save-dev ../ &&
    vue invoke vue-cli-plugin-chrome-ext --name "test 1" --description "test 2" --version_no "1.0.0" --popup "yes"
)