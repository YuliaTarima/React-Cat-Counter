import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from "./Counter";
import CatItem from "./CatItem";

function CatList(props) {

    return (
        <div className="row row-eq-height">

                {props.catList.map(el => <CatItem key={el.id}/>)}
                {/*{props.catList.map(el =>*/}
                {/*    <li key={el.id}>{el.name}</li>*/}
                {/*)}*/}

        </div>
    );
}

const mapStateToProps = state => ({
    catList: state.cats.catList,
});

const mapDispatchToProps = dispatch => ({
    // userGetById: userId => dispatch(userGetById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
