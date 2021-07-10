import React, {useState, useRef, useEffect} from 'react';
import {getPost} from '../utils/apiCalls';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


function PostView(props) {
    const [userPost, setUserPost] = useState([]);
    const [viewPost, setViewPost] = useState(null);
    const token = props.user.user.token
    let {picture} = props.data.user || ""
    picture =  picture || "images/profile.jpg";

    
    useEffect(async() => {
       
        let post = await getPost(token);
        if (post){
            setUserPost(post);
        }
        
        return () => {
            
        }
    }, [])
    return (
        <div>
                 <div class="">

<div class="middle-sidebar-bottom" style={{paddingLeft: "20px"}}>
    <div class="middle-sidebar-left">
        
        <div class="row">
            <div class="col-12">
                <div class="card dash-card dash-card__records dash-card__posts">
                    {
                        viewPost !== null ? (<span onClick={() => setViewPost(null)}  class="back-btn">
                        <h3 class="card-title mb-3">Post</h3>
                        </span>) : null
                    }
                    
                    {
                        viewPost === null ? (<h3 class="card-title mb-3">POSTS</h3>) : null
                    }
                    

                {

                    viewPost === null ? 

                    userPost.map((item) => {
                        return (
                            <div class="single-record-row d-flex" >
                            <span class="link-cover"></span>
                            <h4 class="post-single_title">{item.title} <span class="post-single_date">
                                { new Date(item.createdAt).toDateString()} at {new Date(item.createdAt).toLocaleTimeString()}</span></h4>
                            <span class="dropdown-menu-link ms-auto" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></span>
                            <div class="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-md" aria-labelledby="dropdownMenu2">
                                <div class="card-body p-0">
                                    <span onClick={() => {setViewPost(item)}} class="d-block font-xsss text-grey-600 mt-0">View Post</span>
                                </div>
                                <div class="card-body p-0 mt-2">
                                    <a href="#" class="d-block font-xsss text-grey-600 mt-0">Edit</a>
                                </div>
                                <div class="card-body p-0 mt-2">
                                    <a href="#" class="deleteBtn d-block font-xsss text-danger mt-0">Delete</a>
                                </div>
                            </div>
                    </div>
                    
                        )
                    })

                    : null    
                      
                }

                {
                    viewPost !== null ? ( <div class="card card-creator mb-3">
                    <div class="card-body card-creator-meta">
                        <figure class="avatar me-3" style={{
            backgroundImage: 'url('+picture+')'
          }}>
                            <img src={picture} alt=""/>
                        </figure>
                        <h4 class="card-creator-meta--author"> <a href="#"></a> <span
                                class="card-creator-meta--date"> { new Date(viewPost.createdAt).toDateString()}
                                </span></h4>

                    </div>
                    <div class="card-body card-creator-image">
                        <img src={viewPost.image} class="post-image" alt="image"/>
                    </div>
                    <div class="card-body p-0 me-lg-5">
                        <a href="#">
                            <h3 class="card-creator-title">{viewPost.title}</h3>
                            <p class="card-creator-text">{viewPost.message}</p>
                        </a>
                    </div>
                </div>
            ) : null
                }

                       
                    
                                
                                
               
            
                </div>
            </div>
        </div>

        
    </div>

</div>
</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        user: state.auth,
        data: state.user
    }
  }
  
  export default connect(mapStateToProps)(PostView);