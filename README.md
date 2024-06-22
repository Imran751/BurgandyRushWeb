# RNExpo-StartingPoint

#Git commands
git add .
git commit -m "comment"
git pull origin main --rebase
git push origin main

git branch development
(to create new branch)

git checkout -b development
(create and switch into develoment branch)

git checkout development
(switch)

git clone --branch development <repository_url>
(to clone the development branch)

#for build
create an account on expo.dev
install eas cli
npm install -g eas-cli
eas login
eas build: configure
check eas.json
eas build -p android -e preview
AAB file for Andriod
IPA file ofr ioS -Archives
