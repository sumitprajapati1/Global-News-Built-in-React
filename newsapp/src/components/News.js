import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize: 15,
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string.isRequired,
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.props.category} -Global News`;
  }

  async updateNews()
  {
    let url=` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63eca7be7c1d4031b766104092f60cf6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, loading:false})
  }

  async componentDidMount()
  {
    this.updateNews();
  }
  async componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.setState({ page: 1 }, this.updateNews);
    }
  }
  handleNextClick=async()=>
  {
    this.setState(
      { page: this.state.page + 1 },
      this.updateNews
    );
  }

  handlePrevClick=async()=>
  {
    this.setState(
      { page: this.state.page - 1 },
      this.updateNews
    ); 
  }


  render() {
    return (
      <div>
        <div className="container ">
          <h1 className="text-center m-5">Global News - Top  {this.props.category} Headlines </h1>

          {this.state.loading && <Spinner/> }
          
            <div className="row">
              {this.state.articles && this.state.articles.map((element)=>{
                return (<div className="col-md-4" key={element.url}>
                  <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>)
              })}
            </div>
        </div>
        <div className="container p-3 d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr;  Previous</button>
          <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News
