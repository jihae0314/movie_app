import React from 'react';
import './App.css';
import Moive from './Moive';


class App extends React.Component{
  state = {}
  componentDidMount(){
    this._getMovies()

    /*setTimeout(()=>{
      this.setState({
        Movies :[
          {
            title:"Spider-Man",
            poster:"http://image.cine21.com/resize/cine21/poster/2019/0723/12_29_23__5d367f132826a[W680-].jpg"
            
          },
          {
             title:"Showtimes for Avengers: Endgame",
             poster:"https://t1.daumcdn.net/liveboard/feelthemovie/873a9fd390114677a4e8ffddba7957ca.JPG"
          },
          {
            title:"The Maze Runner",
            poster:"http://mblogthumb2.phinf.naver.net/MjAxODA3MjlfMjk4/MDAxNTMyODczODA5OTM3.SK-a1NKH4M1Fce74k7IL6eqfU_ym_hcMjUpad2ubv0sg.MqLK54_bj3j7mdZcRB4Fb0O2oZk5TndTgdY7FnOM7aMg.PNG.avnet75/1.png?type=w800"
          },
          {
            title:"Roar to Victory",
            poster:"http://asianwiki.com/images/e/ec/The_Battle-_Roar_to_Victory-tp1.jpg"
          },
          {
            title:"Iron Man",
            poster:'https://t1.daumcdn.net/cfile/tistory/245A8450573BCC8B2E'
          }
        ]
      })
    },5000)*/

  }
  _renderMovies = ()=>{
    const _movie = this.state.movies.map(movie=>{
      console.log(movie)
      return <Moive title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      >

      </Moive>//타이틀과 포스터의 인자값을 넘겨줌 import Moive from './Moive';
    })
    return _movie
  }

 _getMovies =  async ()=>{
    const movies = await this._callApi() // await은 n_callApi가 끝나기를 기다리는 것 성공적인 수행이 아니라
    //callApi의 리턴 값을 movies에 넣는다 이때 await를 사용하면 이 callApi가 모두 끝날때까지(반복이든 뭐든) setState는 실행되지 않아 즉, 정보들 다받고 한번에 set시키는거지
    this.setState({
      movies
    })
    
  }

  _callApi = ()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count') //url로 ajax를 불러올수 있어서 fetch가 좋음
    .then(potato => potato.json()) // 패치로 받은 바이너리 오브젝트를 제이슨으로 변경해줌
    //위의 라인이 끝나면 성공이고 뭐고 끝나면 실행 그리고 위의 패치의 결과물 오브젝트를 어트리뷰트로 받는다.
    .then(json => json.data.movies) //=>에 return이 포함됨 여기잇는 moives가 위에 state에 들감
    .catch(err => console.log(err))//fetch에서 오류가 나면 잡아서 보여줘
    /*이전에는 funtion(err){
      console.log(err)
    } 를 사용
*/
  }

  render(){
    const {movies} = this.state;
    return (
      <div className={movies ? "App":"App--loading"}>
        {movies ? this._renderMovies():"Loading.."}
      </div>
    );
  }
}
    
 


export default App;
