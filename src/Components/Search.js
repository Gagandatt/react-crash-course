import React, { useState, useEffect } from 'react';
function Search() {
    const [category, setCategory] = useState("technology")
    const [news, setNews] = useState([])

    const fetchNews = async(cateNews) => {
        const response  = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${cateNews}&apiKey=6004b8fcb1604003b4ead57854e8d2c2`)
        const result  = await response.json();
        console.log(result.articles);
        setNews(result.articles)
    }
    return (
        <>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary mb-3" onClick={() => fetchNews(category)} >Search News</button>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    {
                        news.map((value, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 my-3" key={index}>
                                    <div className="card" style={{ width: "18rem"}}>
                                        <img src={value.urlToImage} className="card-img-top" alt="img"  style={{height:"15rem"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{value.author}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href={value.url} target="_blank" className='btn btn-primary'>Main News</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Search