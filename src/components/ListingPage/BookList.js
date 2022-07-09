import React from "react";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { BookContext } from '../../Context/BookContext';

function BookList() {

const bookContext = React.useContext(BookContext);
const {data} = bookContext;
console.log(data);

    return (
        <>
            <div style={{ backgroundColor: "bisque" }} className="row container-fluid">
                <div className="section-title">
                    <h4>Related posts</h4>
                </div>
                <div className="main-div row container-fluid">


                    <div className="card col-3 offset-1">
                        <div className="row">
                            <img className="book-images" src="https://primehostingindia.com/templatemonster/react/bookbay/assets/img/blog/4.jpg"></img>
                        </div>
                        <div className="row clickable-chips">
                            <div className="offset-1 clo-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                            <div className="offset-1 col-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                        </div>
                        <div className="book-title">
                            <h5><a href="">Mixed Lemon Breeds</a></h5>
                        </div>
                        <div className="postedon">
                            <p className="posted-date"><strong>Posted On: </strong>May 20, 2022</p>
                        </div>
                        <div className="some-text">
                            <p className="some-textofbook">orem simply dummy text printing and typesetting industry. Lorem Ipsum has beensince the 1500s</p>
                        </div>
                        <div className=" readmore-book">
                        <Link to='/book-detail'>
                            <button className="readmore-btn">Read more</button>
                            </Link>                        </div>
                    </div>


                    <div className="card col-3 offset-1">
                        <div className="row">
                            <img className="book-images" src="https://primehostingindia.com/templatemonster/react/bookbay/assets/img/blog/4.jpg"></img>
                        </div>
                        <div className="row clickable-chips">
                            <div className="offset-1 clo-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                            <div className="offset-1 col-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                        </div>
                        <div className="book-title">
                            <h5><a href="">Mixed Lemon Breeds</a></h5>
                        </div>
                        <div className="postedon">
                            <p className="posted-date"><strong>Posted On: </strong>May 20, 2022</p>
                        </div>
                        <div className="some-text">
                            <p className="some-textofbook">orem simply dummy text printing and typesetting industry. Lorem Ipsum has beensince the 1500s</p>
                        </div>
                        <div className=" readmore-book">
                        <Link to='/book-detail'>
                            <button className="readmore-btn">Read more</button>
                            </Link>                        </div>
                    </div>


                    <div className="card col-3 offset-1">
                        <div className="row">
                            <img className="book-images" src="https://primehostingindia.com/templatemonster/react/bookbay/assets/img/blog/4.jpg"></img>
                        </div>
                        <div className="row clickable-chips">
                            <div className="offset-1 clo-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                            <div className="offset-1 col-4"><Chip label="Clickable Link" component="a" href="#chip" clickable />
                            </div>
                        </div>
                        <div className="book-title">
                            <h5><a href="">Mixed Lemon Breeds</a></h5>
                        </div>
                        <div className="postedon">
                            <p className="posted-date"><strong>Posted On: </strong>May 20, 2022</p>
                        </div>
                        <div className="some-text">
                            <p className="some-textofbook">orem simply dummy text printing and typesetting industry. Lorem Ipsum has beensince the 1500s</p>
                        </div>
                        <div className=" readmore-book">
                        <Link to='/book-detail'>
                            <button className="readmore-btn">Read more</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookList;