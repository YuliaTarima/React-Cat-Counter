import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {
    render() {
        return (
            <div>

                <ul>
                    {
                        this.props.catList.map(el =>
                            <li key={el.id}>{el.name}</li>)
                    }
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    catList: state.todo.catList,
});

const mapDispatchToProps = dispatch => ({
    // userGetById: userId => dispatch(userGetById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
