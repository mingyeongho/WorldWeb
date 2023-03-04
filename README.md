<h1 align='center'>세계웹</h1>

기간. 23.02.25 ~23.03.04

Notion. https://tender-chameleon-72c.notion.site/e9a807539544457fafbe2f086bec5765

## 📖 목차

<ol>
    <li>
        <a href='#overview'>Overview</a>
    </li>
    <li>
        <a href='#run'>환경설정 및 실행</a>
    </li>
    <li>
        <a href='#features'>요구사항</a>
    </li>
    <li>
        <a href='#library'>라이브러리</a>
    </li>
    <li>
        <a href='#structure'>폴더 구조</a>
    </li>
    <li>
        <a href='#agonize'>고민한 부분</a>
    </li>
    <li>
        <a href='#improve'>개선사항</a>
    </li>
    
</ol>

<h2 id='overview'>Overview</h2>

### 조회

<video src='https://user-images.githubusercontent.com/57670160/222903614-91b5df7f-eaf5-4cc8-885b-85195e134aa6.mov'></video>

### 검색

<video src='https://user-images.githubusercontent.com/57670160/222903660-aa352b42-e163-4ec7-9e24-6886cd3e55e9.mov'></video>

### 좋아요

<video src='https://user-images.githubusercontent.com/57670160/222903712-787f14c2-3414-4568-a895-f5f52a517a63.mov'></video>

<h2 id='run'>환경설정 및 실행</h2>

<pre>
git clone https://github.com/mingyeongho/WorldWeb.git

npm install

npm run dev
</pre>

<h2 id='features'>요구사항</h2>

- [x] 대륙, 국가, 언어를 조회할 수 있다.
- [x] 대륙에 포함되는 국가를 조회할 수 있다.
- [x] 국가에서 사용하는 언어를 조회할 수 있다.
- [x] 국가 코드로 국가를 검색할 수 있다.
- [x] 국가를 좋아요할 수 있다. (로컬스토리지이용)
- [ ] 좋아요한 국가를 조회할 수 있다.
- [x] 국가 정보에 대한 상세 정보 페이지를 볼 수 있다.

<h2 id='library'>라이브러리</h2>

<img width="495" alt="image" src="https://user-images.githubusercontent.com/57670160/222903794-02cc2d9a-c1f4-40eb-86ed-89a72b14731f.png">

<h2 id='structure'>폴더 구조</h2>

<pre>
.
├── components
│   ├── Atoms
│   │   ├── Button
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.style.tsx
│   │   │   └── Button.tsx
│   │   ├── Emoji
│   │   │   ├── Emoji.stories.tsx
│   │   │   ├── Emoji.style.tsx
│   │   │   └── Emoji.tsx
│   │   ├── Input
│   │   │   ├── Input.stories.tsx
│   │   │   ├── Input.style.tsx
│   │   │   └── Input.tsx
│   │   └── Span
│   │       ├── Span.stories.tsx
│   │       ├── Span.style.tsx
│   │       └── Span.tsx
│   ├── Molecules
│   │   ├── Country
│   │   │   ├── Country.stories.tsx
│   │   │   ├── Country.style.tsx
│   │   │   └── Country.tsx
│   │   ├── Form
│   │   │   ├── Form.stories.tsx
│   │   │   ├── Form.style.tsx
│   │   │   └── Form.tsx
│   │   └── TabBar
│   │       ├── TabBar.stories.tsx
│   │       ├── TabBar.style.tsx
│   │       └── TabBar.tsx
│   ├── Organisms
│   │   ├── Countries
│   │   │   ├── Countries.stories.tsx
│   │   │   ├── Countries.style.tsx
│   │   │   └── Countries.tsx
│   │   ├── CountriesTab
│   │   │   ├── CountriesTab.stories.tsx
│   │   │   ├── CountriesTab.style.tsx
│   │   │   └── CountriesTab.tsx
│   │   └── Nation
│   │       ├── Nation.stories.tsx
│   │       ├── Nation.style.tsx
│   │       └── Nation.tsx
│   └── Templates
│       ├── Home
│       │   ├── Home.stories.tsx
│       │   ├── Home.style.tsx
│       │   └── Home.tsx
│       └── Nation
│           ├── NationTemplate.stories.tsx
│           ├── NationTemplate.style.tsx
│           └── NationTemplate.tsx
├── gql
│   ├── allCountries.ts
│   ├── getCountries.ts
│   ├── getNation.ts
│   └── likeCountries.ts
├── hooks
│   └── useForm.ts
├── pages
│   ├── [nation].tsx
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── stories
│   ├── Button.stories.ts
│   ├── Button.tsx
│   ├── Header.stories.ts
│   ├── Header.tsx
│   ├── Introduction.mdx
│   ├── Page.stories.ts
│   ├── Page.tsx
│   ├── assets
│   │   ├── code-brackets.svg
│   │   ├── colors.svg
│   │   ├── comments.svg
│   │   ├── direction.svg
│   │   ├── flow.svg
│   │   ├── plugin.svg
│   │   ├── repo.svg
│   │   └── stackalt.svg
│   ├── button.css
│   ├── header.css
│   └── page.css
├── styles
│   ├── GlobalStyle.tsx
│   └── Palette.ts
└── utils
    ├── apollo.ts
    └── type.ts
</pre>

<h2 id='agonize'>고민한 부분</h2>

1. 아토믹 디자인 패턴의 사용
   - Props drilling
   - Atom에 어떤 Props를 줄것인가
2. 디자인
3. localStorage의 사용
4. Storybook과 NextJS의 사용

<h2 id='improve'>개선사항</h2>
