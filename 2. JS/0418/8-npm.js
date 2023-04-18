// npm
/*
* - node pacakge manager
* - 우리가 필요한 많은 모듈을 node.js에서 내장모듈로 제공하기에는 한계가 존재함.
* - 이것을 사용자들이 개발하여 공유하게 되면 굉장히 많은 모듈을 사용할 수 있게 된다.
* - npm은 사용자 정의 모듈을 다운로드 받거나 관리할 수 있게 하는 모듈 매니징 프로그램이다.
* - 사용자가 작성한 패키지를 공개도 가능하며 필요한 패키지를 검색하여 사용하는 것도 가능하다.
* - 자세한 모듈의 내용은 npm 사이트의 검색을 통해 확인할 수 있다. => npmjs.com
* -
*/
// npm 기본 명령어
/*
* - npm install <package> (중요!!!!!) : 패키지를 설치한다. 지역 설치가 아닌 전역 설치를 할 경우 -g 옵션을 준다.
* npm install 명령어에 --save 옵션을 사용하면 패키지 설치와 함께 package.json의 dependencies에 설치된 패키지 이름과 버전을 기록한다.
* --save-dev는 개발 패키지 설치 옵션
* - npm init(중요!!!!!) : package.json을 생성한다. npm은 package.json을 통해서 프로젝트의 정보 및 패키지의 의존성을 (dependency) 관리한다.
* - npm uninstall <package> : 패키지를 제거한다. -g 옵션을 주면 전역 패키지를 제거한다.
* - npm update <packages> : 패키지를 업데이트 한다.
* - npm start : package.json script 프로퍼티의 start 실행
* - npm run : package.sjon script 프로퍼티의 run 실행.
*
* */

// package.json
/*
* - 프로젝트의 정보와 의존성 (dependencies)를 관리하는 문서
* - 이미 작성된 package.json 문서는 어느 곳에서도 동일한 개발환경을 구출할 수 있게 해준다.
* - JSON 포멧으로 작성해야 한다.
* */


//package.json 주요 옵션
/*
* - name : 프로젝트 명
* - version : 현재 프로젝트 버전 명
* - description : 프로젝트에 대한 상세 설명
* - licence : 해당 프로젝트에 대한 라이센스 지정
* - author :  제작자의 이름 or 닉네임.
* - files : 패키지가 의존성으로 설치될 때 같이 포함될 파일들의 배열, 생략시 자동 제외로 설정된 파일을 제외한 모든 파일이 공유된다.
* - main(중요) : 프로그램의 기본 진입저믈 설정할 때 사용. 엔트리 포인트라고 하며 실제 프로젝트를 실행 시 시작할 시점을 나타낸다.
* - script(중요) : 패키지에서 자주 사용되는 콘솔 명령어를 넣을 경우 사용되는 속성.
* - dependencies(매우 중요!!!) : 패키지의 배포 시 포함될 의존성 모듈을 지정한다.
* - devdependencies : 패키지의 개발 시 사용될 의존성 모듈을 지정한다.
*
*
* */
const lc = require("lower-case")
console.log(lc.lowercase("STRING"))