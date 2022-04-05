# 진예도

# [03월 30일]
## firebase 등록하기
```
1. https://console.firebase.google.com/?hl=ko 접속 후 프로젝트 생성
2. 생성한 프로젝트 콘솔창에서 웹 선택
3. React 프로젝트에 firebase import하기 - npm install firebase
4. firebase.js 파일 생성 후 스크립트 붙여넣기

```

## firebase import
```
index.js

[firebase 8버전 이하]
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

[firebase 9버전 이상]
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
```
npm install react-router-dom

# [03월 23일]
## React App 생성시 오류 해결 방법

### 1. 일회성
```
npx create-react-app@latest 프로젝트명
```
### 2. 설치형 
```
npm install -g create-react-app@latest 
npx create-react-app 프로젝트명

-g OR --global
-v OR -version
```

## 로컬 PC에서 PUSH
```
git config --global user.name "Your Name"
git config --global user.email 이메일주소

[ 확인 ]
git config user.name
git config user.email
```
