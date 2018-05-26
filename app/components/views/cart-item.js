import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
    console.log(props);
    return (
        <div className="data-list">

            {props.items.map(item => {

                return (
                    <div key={item.name} className="data-list-item">
                        <div className="details">
                           {item.name} : {item.qt} : Total Amount : {item.price * item.qt}
                        </div>
                        <div className="controls">
                            <button onClick={props.deleteItem.bind(null,item)} className="delete">Delete</button>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}