import React from 'react';
import { FaUser,  FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './blogs.css';

import mountainImg1 from './imgs/mountains1.jpg';
import mountainImg2 from './imgs/mountains1.jpg';
import mountainImg3 from './imgs/mountains1.jpg';

const Blogs = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="heading">
          <h2>Featured Blogs</h2>
        </div>

        <div className="grid mtop">
          <article className="box">
            <div className="img">
              <img src={mountainImg1} alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className='icon'/> <label>Altaf</label>
              </div>
              <h3>Places to visit in Mumbai</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blogs/blog1">Read More <FaLongArrowAltRight className='right-arr'/></Link>
            </div>
          </article>
          <article className="box">
            <div className="img">
              <img src={mountainImg2} alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className='icon'/> <label>Altaf</label>
              </div>
              <h3>Things to do in Mumbai</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blogs/blog2">Read More <FaLongArrowAltRight className='right-arr' /></Link>
            </div>
          </article>
          <article className="box">
            <div className="img">
              <img src={mountainImg3} alt="" />
              <span>TRENDY</span>
            </div>
            <div className="text">
              <div>
                <FaUser className='icon'/> <label>Altaf</label>
              </div>
              <h3>Places to visit in Mumbai</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/blogs/blog3">Read More <FaLongArrowAltRight className='right-arr'/></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
