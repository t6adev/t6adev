import { MuiThemeProvider } from 'material-ui/styles';
import Head from 'next/head';

const style = {
  top: {
    position: 'relative',
  },
  topImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    zIndex: 5,
    width: '95%',
    margin: '0 auto',
    wordWrap: 'break-word',
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};

export default () =>
  <MuiThemeProvider>
    <div>
      <div style={style.top}>
        <img style={style.topImage} src="/static/images/top-cover.jpg" />
      </div>
      <div style={{ position: 'relative', paddingTop: '60%', paddingBottom: '4%' }}>
        <div style={style.content}>
          <div style={{ padding: '1% 3%' }}>
            <p>
              ソフトウェアエンジニアのTellyです。最近は主にweb開発を中心にお仕事を頂いております。<br />
              web開発は全てJSでのスキルセットになります。ご連絡はTwitterのDMでお待ちしております。
            </p>
            <h2>Skill Set</h2>
            <h3>Desktop Application</h3>
            <p>C#(Form, WPF)</p>
            <h3>Web Application</h3>
            <p>Front End : HTML, CSS, JavaScript(jQuery, Bootstrap, MDL)</p>
            <p>Back End : Node.js</p>
            <h4>JS Tools</h4>
            <p>Express.js, Jest, Mocha, Chai, ESLint, Babel, Webpack, Angular v1, React, Redux, Meteor, Nextjs</p>
            <h3>Others</h3>
            <p>Git(Github, Gitlab), Google Cloud Platform, Docker, Postgresql, MongoDB, Heroku, CircleCI</p>
            <h3>Almost Beginner</h3>
            <p>PHP, GO, AWS, Azure, React Native</p>
            <h2>Work History</h2>
            <ul>
              <li>静的・動的サイト作成業務（WordPressなどの構築含む）</li>
              <li>Google Analyticsのjsコード制御業務</li>
              <li>Kinectを用いた医療用ツールの開発</li>
              <li>医療業務用管理ツール作成（デスクトップアプリ）</li>
              <li>Google APIを用いたECサイト業務支援ツール</li>
              <li>Node.jsを用いたCLIツール開発</li>
              <li>Angular v1によるWebアプリケーション開発</li>
              <li>React, ReduxによるWebアプリケーション開発</li>
              <li>JS初心者、初学者へのハンズオン開催</li>
            </ul>
            <h2>Work Style</h2>
            <p>
              リモートでのSlackやSkype等を用いた開発が好みです。<br />
              常に複数のお仕事を行っていくことで相乗効果が得られると信じています。
            </p>
            <h2>Introduce Myself</h2>
            <p>
              修士時代にロボットビジョン研究に従事(当時はC++)。その間、英語もろくに喋ることが出来ないのにアメリカへ1年間研究留学。<br />
              帰国、卒業後、ソフトウェアエンジニアとしてフリーランスとなり今に至る。熊本出身、東京住まい。<br />
              Tellyというハンドルネームですが、名前のもじりです。
            </p>
            <p>
              JS一本で出来るweb開発の未来を信じてこの道を選択。数年経過し、世の中を見てJSで良かったと安心。RubyやPythonなどは未だに食わず嫌い。<br />
              しかし、PHP, Rubyを選択しなかったのは求人数や収入面で後悔し、機械学習面ではPythonをやるべきか悩み中。
            </p>
            <p>
              釣りが趣味。最近は知人の影響でクラフトビール好きに。また、日曜大工にハマり中。
            </p>
            <p>
              Twitterはなんとなくやってます。(Facebookはプライベートではやってます)。<br />
              Githubも、オープンソース活動は全くと言っていいほどしてないので特に見るものも無いですが以下に乗せておきます・・・<br />
              Private RepositoryやGitlabでやっていると自己紹介時に使えないのは残念ですね。
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <a href="https://github.com/tell-y" target="_blank">
                  <img src="/static/images/GitHub-Mark-64px.png" style={{ width: 35 }}/>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/tell_y_t" target="_blank">
                  <img src="/static/images/Twitter_Logo_Blue.png" style={{ width: 40 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>;
