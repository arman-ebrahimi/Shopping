import {useParams} from "react-router-dom";
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {productsService} from "../components/Product";
import {CommentList, Create} from "../components/Comment";

export const Details = () => {
    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        productsService.getProductById(id).then((response) => {
            setData(response.data);
        });
        },[])

    async function sendComment(comment) {
        const response = await productsService.sendComment(id, comment);
        if(response.status === 200){
            const newComments = await productsService.getComments(id);
            setData({...data, comments: newComments.data})
        }}
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({type: "cart/addToCart", payload: data})
    }

    return (
        <Fragment>
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <img src={data.pic} alt="product" width="100%"/>
                </div>
                <div className="col-6">
                    <h1>{data.title}</h1>
                    <div>{data.desc}</div>
                    <div className="text-success fw-bold fs-3">{data.price}</div>
                    <button onClick={addToCart} className="btn btn-primary btn-lg mt-2">Add to cart</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-8 mx-auto">
                    <CommentList comments={data.comments || []} />
                    <Create onComment={sendComment} />
                </div>
            </div>
        </Fragment>
    )
}

