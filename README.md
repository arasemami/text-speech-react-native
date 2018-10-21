# text speech react native

Only For Android

React Native Android Text Top Speech

A react native android wrapper for Text To speech


![alt text](https://raw.githubusercontent.com/arasemami/text-speech-react-native/master/src/img/bg.png "Text Speech React Native")

# Install Module

```
npm install --save-dev react-native-android-speech

```

# Linking

```
android/settings.gradle
```

```
...
include ':react-native-android-speech'
project(':react-native-android-speech').projectDir = new File(settingsDir,'../node_modules/react-native-android-speech')

```

```
android/app/build.gradle
```

```
dependencies {
    ...
    compile project(':react-native-android-speech')
}

```

```
register module (in MainActivity.java)
```

```
...
import com.mihir.react.tts.*; // Import package


...
   @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RCTTextToSpeechModule() //  <-------  Import package

      );
    }

    ...

```

# Example

```

         Speech.speak({
                text: this.state.textSpeech,    // Text For Speech get from state or some string
                pitch:1.5,                      // Optional Parameter to set the pitch of Speech,
                forceStop : false ,             //  Optional Parameter if true , it will stop TTS if it is already in process
                language : 'en',                // Optional Paramenter Default is en you can provide any supported lang by TTS
                country : 'US'                  // Optional Paramenter Default is null, it provoques that system selects its default
            }).then(isSpeaking=>{
                //Success Callback
                console.log(isSpeaking);
            }).catch(error=>{
                //Errror Callback
                console.log(error)
            });

            ```



# Error Building

```
Execution failed for task ':app:processDebugManifest'.
> Manifest merger failed : Attribute application@allowBackup value=(false) from AndroidManifest.xml:11:7-34
        is also present at [:react-native-android-speech] AndroidManifest.xml:12:9-35 value=(true).
        Suggestion: add 'tools:replace="android:allowBackup"' to <application> element at AndroidManifest.xml:7:5-24:19 to override.

        ```

Chnage false to true :

```
...
    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:allowBackup="true"   // < -------
      android:theme="@style/AppTheme">
      ....


    ```
