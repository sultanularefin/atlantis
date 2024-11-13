


[40/76] Building CXX object CMakeFiles/appmodules.dir/Volumes/APFS_500GB/atlantis/android/app/build/generated/autolinking/src/main/jni/autolinking.cpp.o
ninja: build stopped: subcommand failed.

C++ build system [build] failed while executing:
/Volumes/APFS_500GB/AndroidSDK/cmake/3.22.1/bin/ninja \
/Volumes/APFS_500GB/AndroidSDK/cmake/3.22.1/bin/ninja
-C \
/Volumes/APFS_500GB/atlantis/android/app/.cxx/Debug/4o24305n/arm64-v8a \
appmodules \
react_codegen_rnscreens \
react_codegen_rnsvg \
react_codegen_safeareacontext
from /Volumes/APFS_500GB/atlantis/android/app




## adb issue:

Could not automatically detect an ADB binary. Some emulator functionality will not work until a custom path to ADB  is added. 
This can be done in Extended Controls (...) > Settings > General tab > 'Use detected ADB location'




## keystore:

nce(value, Shared... ^~~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:90015:12: warning: the variable "_WORKLET" was not declared in function "registerReanimatedError" if (!_WORKLET) { ^~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:91108:46: warning: the variable "__reanimatedLoggerConfig" was not declared in function "replaceLoggerImplementation" registerLoggerConfig(Object.assign({}, __reanimatedLoggerConfig, { ^~~~~~~~~~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:92004:131: warning: the variable "location" was not declared in function "registerSensor"
...E(_dependencyMap[4]).isWeb)() && location.protocol !== 'https:' ? ' Make s... ^~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:92461:26: warning: Direct call to eval(), but lexical scope is not supported. workletFun = eval('(' + initData.code + '\n)'); ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:92484:112: warning: the variable "_toString" was not declared in function "valueUnpacker"
...recognized by value unpacker: "${_toString(objectToUnpack)}".`); ^~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:107577:27: warning: the variable "HTMLElement" was not declared in function "findDescendantWithExitingAnimation" if (!(node instanceof HTMLElement)) { ^~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:107604:24: warning: the variable "MutationObserver" was not declared in function "addHTMLMutationObserver" var observer = new MutationObserver(function (mutationsList) { ^~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:109799:41: warning: the variable "getComputedStyle" was not declared in function "fixElementPosition"
...entBorderTopValue = parseInt(getComputedStyle(parent).borderTopWidth); ^~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:110135:26: warning: the variable "structuredClone" was not declared in function "createAnimationWithInitialValues" var animationStyle = structuredClone(_$$_REQUIRE(_dependencyMap[6]).Anima... ^~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:114041:26: warning: the variable "_getAnimationTimestamp" was not declared in function "computeEasingProgress" var elapsedTime = (_getAnimationTimestamp() - startingTimestamp) / 1000; ^~~~~~~~~~~~~~~~~~~~~~
/Volumes/APFS_500GB/atlantis/android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle:114441:5: warning: the variable "jest" was not declared in function "beforeTest" jest.useFakeTimers(); ^~~~ FAILURE: Build failed with an exception. * What went wrong:
Execution failed for task ':app:validateSigningRelease'.
> Keystore file '/Volumes/APFS_500GB/atlantis/android/app/my-upload-key.keystore' not found for signing config 'release'. * Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org. BUILD FAILED in 7m 54s.
info Run CLI with --verbose flag for more details.
sultanularefin@Sultanuls-MacBook-Air atlantis % 


