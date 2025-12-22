Last login: Sun Dec 21 17:13:52 on ttys005
seandavey@MacBook-Air-3 ~ % cd projects/tryon
seandavey@MacBook-Air-3 tryon % npx expo start -c
env: load .env
env: export EXPO_PUBLIC_SUPABASE_URL EXPO_PUBLIC_SUPABASE_ANON_KEY DB_PASSWORD DB_HOST DB_PORT DB_USER
Starting project at /Users/seandavey/projects/tryon
Starting Metro Bundler
warning: Bundler cache is empty, rebuilding (this may take a minute)
The following packages should be updated for best compatibility with the installed expo version:
  expo@54.0.29 - expected version: ~54.0.30
  expo-linking@8.0.10 - expected version: ~8.0.11
  expo-router@6.0.19 - expected version: ~6.0.21
Your project may not work correctly until you install the expected versions of the packages.
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀ █▀▀▄█▀▄█▀▄██ ▄▄▄▄▄ █
█ █   █ █▀ ▄ █▀  ▄▀ ▀▀█ █   █ █
█ █▄▄▄█ █▀█ █▄ ▀▀ ▄▀▄██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄█▄█ █▄▀▄█ ▀▄█▄▄▄▄▄▄▄█
█ ▄   █▄   ▄█▄▄▄▄▀▄▄ ▄▄▀▄▀▄█▄▀█
█▄ █▀▄▄▄█▀ ▀ ▄▄ ▄ █▄█ ▀▀▄ ██▀██
█ ▄▀██ ▄█▀ ▀▄▀▀██▀  ▀▄▄▀▄▀▄ █▀█
█ ▄▄▀▀ ▄███ █▀ ▄ ▀▄█▀█ ▄▀██▄▀██
█  ▀ ▀█▄▄▄█ █▄█▄█▀▀█▀▄ ▀█▀▀ █▀█
█ █▀█ █▄▀  ▄ ▄█▀▄ ▄█▀▀▀ █▀▄▄▀██
█▄█▄█▄█▄▄▀█ ▄▀▀▀██▄▀▄ ▄▄▄ ▀   █
█ ▄▄▄▄▄ █▄▀ █▀ ▄▄ ██▄ █▄█ ▄▄█▀█
█ █   █ █ ▀██▄█▄█▀ ██▄ ▄ ▄▄▄▀▀█
█ █▄▄▄█ █ ▀▀ ▄█▀ ██ ▀ ▀▄▀ ▄█ ██
█▄▄▄▄▄▄▄█▄█▄▄███▄▄▄███████▄▄███

› Choose an app to open your project at http://192.168.18.25:8081/_expo/loading
› Metro waiting on exp://192.168.18.25:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
› Opening on iOS...
› The expo-dev-client package is installed, but a development build is not installed on iPhone 16 Pro.
Launching in Expo Go. If you want to use a development build, you need to create and install one first.
Learn more: https://docs.expo.dev/development/build/
› Opening exp://192.168.18.25:8081 on iPhone 16 Pro
› Press ? │ show all commands
› Reloading apps
No apps connected. Sending "reload" to all React Native apps failed. Make sure your app is running in the simulator or on a phone connected via USB.
› Opening on iOS...
› The expo-dev-client package is installed, but a development build is not installed on iPhone 16 Pro.
Launching in Expo Go. If you want to use a development build, you need to create and install one first.
Learn more: https://docs.expo.dev/development/build/
› Opening exp://192.168.18.25:8081 on iPhone 16 Pro
› Press ? │ show all commands
iOS Bundled 21590ms node_modules/expo-router/entry.js (1181 modules)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$2 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)
 ERROR  Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. .$3 

Code: closet.tsx
  168 |       {/* List */}
  169 |       {!loading && !error && (
> 170 |         <FlatList
      |         ^
  171 |           data={tryons}
  172 |           renderItem={renderItem}
  173 |           keyExtractor={(item) => item.tryon_id.toString()}
Call Stack
  ClosetScreen (app/(tabs)/closet.tsx:170:9)
  TabLayout (app/(tabs)/_layout.tsx:8:5)
  RootLayoutNav (app/_layout.tsx:39:7)
  RootLayout (app/_layout.tsx:58:7)

