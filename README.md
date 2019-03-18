# Wal-Assist
An ionic-app to better assist a user looking to purchase goods through physical stores.

<b>Steps to deploy the application in Android:<br></b>
1. Install Android Studio just for using its free emulator (can use anything for emulator here) and configure its emulator.
2. Install npm, ionic and cordova(to make the app run on android).
3. Get and Replace the google maps api key inside the <i><b>index.html</b></i> and <i><b>app.module</b></i> folders.
4. Run these commands to create the project folder:<br><b><i>
	a. sudo ionic start WalmartApp tabs<br>
	b. cd Wal-Assist<br>
	c. sudo ionic cordova platform add android<br></b></i>
5. To run the app inside the android emulator run:<b><i> sudo ionic cordova run android --prod</b></i>
6. If you get an error about nodesass run:<b><i> sudo npm install --save-dev  --unsafe-perm node-sass</b></i>
7. To include Barcode/Qrcode Scanning feature:<br><b><i>
 	a. sudo ionic cordova plugin add phonegap-plugin-barcodescanner<br>
    b. sudo npm install @ionic-native/barcode-scanner<br></b></i>
8. In project folder your android app is at:<b><i> Wal-Assist/platforms/android/app/src/main/</b></i>

  
Commands that worked for me from mac:<br>
&emsp;1. Git init<br>
&emsp;2. Git status <br>
&emsp;3. Git add .<br>
&emsp;4. Git commit -m "initial commit"<br>
&emsp;5. Git remote set-url origin https://github.com/Rogue-Jaeger/Wal-Assist.git<br>
&emsp;6. Git push --set-upstream origin master<br>
&emsp;7. Git push origin master --force
