import React from "react";

const Card = () => {
    return (

        <div className="container text-center">
        
            <div className="card-group text-center">
                <div className="card">
                    <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Lorem ipsum dolor. Eos architecto, repellendus nemo voluptatum hic magni voluptatem nostrum quae recusandae reprehenderit facilis!</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Card;