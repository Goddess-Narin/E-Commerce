import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const {id} = useParams();
    //console.log(id)
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"}/>
      <div className='blog-section blog-single padding-tb section-bg'>
        <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
                <article>
                    <div className='section-wrapper'>
                        <div className='row row-cols-1 justify-content-center g-4'>
                            <div className='col'>
                                <div className='post-item style-2'>
                                    <div className='post-inner'>
                                        {
                                            result.map((item) => (
                                                <div key={item.id}>
                                                    <div className='post-thumb'>
                                                        <img src={item.imgUrl} alt="" className='w-100'/>
                                                    </div>

                                                    <div className='post-content'>
                                                        <h3>{item.title}</h3>
                                                        <div className='meta-post'>
                                                                <ul className='lab-ul'>
                                                                    {item.metaList.map((val, i) => {
                                                                        <li key={i}>
                                                                            <i className={val.iconName}></i>{""}
                                                                            {val.text}
                                                                        </li>
                                                                    })}
                                                                </ul>
                                                        </div>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                                           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                                                        <blockquote>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                                            <cite>
                                                            <a href="#">....Melissa Hunters</a>
                                                        </cite>
                                                        </blockquote>
                                                        

                                                        <p>
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                                        </p>

                                                        <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                        <p>
                                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                                        </p>
                                                        
                                                        <div className='video-thumb'>
                                                            <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                            <a href="https://youtu.be/TPad6IyjGV8?si=bDWvH8LmSRsIjg7j" className='video-button popup' target='_blank'>
                                                            <i className='icofont-ui-play'></i></a>
                                                        </div>

                                                        <p>
                                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                                        </p>
                                                        
                                                        <div className='tags-section'>
                                                            <ul className='tags lab-ul'>
                                                                <li>
                                                                    <a href="#">Agency</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Business</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">Personal</a>
                                                                </li>
                                                            </ul>
                                                            <ul className='lab-ul social-icons'>
                                                                {
                                                                    socialList.map((val, i) =>(
                                                                        <li key={i}>
                                                                            <a href="#" className={val.className}>
                                                                                <i className={val.iconName}></i>
                                                                            </a>
                                                                        </li>
                                                                    )) 
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className='navigations-part'>
                                <div className='left'>
                                    <a href="#" className='prev'>
                                        <i className='icofont-double-left'></i> Previous Article
                                    </a>
                                    <a href="#" className='title'>
                                        Evisculate Parallel Processes via Techica Sound Models Authoritative
                                    </a>
                                </div>
                                <div className='right'>
                                    <a href="#" className='prev'>
                                        <i className='icofont-double-right'></i> Next Article
                                    </a>
                                    <a href="#" className='title'>
                                        Evisculate Parallel Processes via Techica Sound Models Authoritative
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className='col-lg-4 col-12'>
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
