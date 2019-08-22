import React, {Component} from 'react';
import './Moive.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
class Moivs extends Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster :PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }
    render(){
        return(
            <div className="Movie">
                <div className="Movie__Columns">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie_Genres">
                        {this.props.genres.map((genres, index) => <MovieGenres genres={genres} key={index}></MovieGenres>)}
                    </div>
                    <p className="Movie__Synopsis">
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis = '...'
                            trimRight
                            basedOn='letters'
                        ></LinesEllipsis>
                    </p>
                </div>
                
            </div>
        
        )
    }
}
function MovieGenres({genres}){
    return(
        <span className="Movie_Genre">{genres}  </span>
    )
}
function MoviePoster({poster, alt}){ //인자를 받아옴 App에서 포스터의 인자값을 받음
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__poster"/>
        //this.props.poster가 아니라 그냥 poster 왜냐면 이제 이건 컴포넌트가 아니라 함수 인자이기때문
        )
}
MoviePoster.prototype = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
MovieGenres.prototype ={
    genres : PropTypes.string.isRequired

}

export default Moivs;
// funtion 과 Component는 다름! Component는 state와 props를 가짐 하지만 funtion은 걍 함수이기때문에 둘을가질수 없음