# Vue Roadmap Mobile App

This is a small Ionic Vue mobile app that turns the 2-week Vue mastery roadmap into an easy-to-navigate app.

## Run
```bash
npm install
npm run dev
```

## Build Web
```bash
npm run build
```

## Android Project
The Android Capacitor project has already been created in `android/`.

## Build Debug APK
From the `android/` folder:

```bash
$env:GRADLE_USER_HOME='c:\Users\HAVEN\Desktop\kgl ppt\roadmap-app\.gradle-user-home'
.\gradlew.bat assembleDebug
```

The generated APK is placed at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Build Release APK
This project is configured for a local signed release APK using:
- `android/keystore.properties`
- `android/vue-roadmap-release.jks`

From the `android/` folder:

```bash
$env:GRADLE_USER_HOME='c:\Users\HAVEN\Desktop\kgl ppt\roadmap-app\.gradle-user-home'
.\gradlew.bat assembleRelease
```

The generated release APK is placed at:

```text
android/app/build/outputs/apk/release/app-release.apk
```

## Important Note
This machine has `JDK 17`, while the generated Capacitor Android files targeted Java `21`. The project was adjusted locally to build with Java `17`.

If you later reinstall dependencies or run a Capacitor update or sync that rewrites Android build files, you may need to re-apply the Java `17` compatibility change.
