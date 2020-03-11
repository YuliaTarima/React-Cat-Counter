import React, { Component } from 'react';
import { connect } from 'react-redux';

function CatList(props) {

        return (
            <div>

                <ul>
                    {
                        props.catList.map(el =>
                            <li key={el.id}>{el.name}</li>)
                    }
                </ul>

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
