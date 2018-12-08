# /bin/sh

[ -e test-prod ] && rm -rf test-prod
vue create test-prod -d
(
    cd test-prod &&
    vue add chrome-ext
)
