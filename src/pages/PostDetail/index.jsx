import { Typography } from 'antd';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import LayoutBlog from '../../layouts/LayoutBlog';
import styles from './PostDetail.module.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PostDetail() {
    const params = useParams();
    console.log('post detail', params);
    const [post, setPost] = useState({})
    const handleGetPostById = async ()=> {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <LayoutBlog>
                <div className={cx('wrap-post-detail')}>
                    <img
                        src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/08/post-1-img-800x400.jpg"
                        alt=""
                        // className={cx('post-item__img')}
                    />
                    <Typography.Title className={cx('post-detail__tilte')}>
                        5 Benefits Of Integrative Medicine
                    </Typography.Title>
                    <Typography.Title level={4} className={cx('post-detail__timedoctor')}>
                        {' '}
                        <span>July 28, 2019</span> by{' '}
                        <span>
                            <Link to={'/'}>Dr.Jeremy smith</Link>
                        </span>
                    </Typography.Title>
                </div>
                <div className={cx('post-detail__content')}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto aspernatur tempora libero sit
                    modi vero repudiandae enim tenetur deserunt! Eaque hic, amet eveniet beatae dolore rem debitis in
                    dolor. Commodi illo, deleniti est doloribus aliquid tempore consequuntur quaerat deserunt odit
                    ducimus odio fuga. Excepturi, cum suscipit quae quibusdam id nesciunt quidem aut mollitia facilis
                    nihil est numquam explicabo adipisci. Beatae labore cupiditate recusandae officia nobis tempore
                    laboriosam at odio sit deserunt non expedita delectus perferendis, nisi a tempora voluptate in est
                    quam, commodi nostrum, optio quae. Dolores, eaque magnam. Laudantium aut tempora asperiores expedita
                    dolore nulla quisquam. Reprehenderit ipsa quam blanditiis voluptatem. Itaque assumenda beatae
                    excepturi doloremque asperiores, minima necessitatibus quod aut doloribus ipsam aliquam corporis
                    nostrum fuga consequuntur. Fugiat sapiente distinctio eos assumenda molestias eaque enim dolorum
                    soluta rem consectetur odio minus inventore hic maiores totam labore omnis reiciendis, adipisci
                    iusto dolores facere aliquid deserunt repellat illo. Tenetur! Autem nihil quia, aut ex consectetur
                    deserunt in quaerat consequuntur, ratione quis id illo laborum eos! Quaerat magnam recusandae
                    provident adipisci quasi error eum amet nisi. Quas obcaecati ab molestias. Sint iste ratione iusto
                    accusantium vel, praesentium nobis ab iure, illum porro dolore ad odio provident debitis architecto
                    vitae id, in atque? Delectus fugit molestiae ut consectetur quaerat ipsam natus? Harum corporis
                    explicabo praesentium cumque sed recusandae a et voluptas obcaecati ipsa, rem eaque, quam officiis
                    maxime vero facere ipsam ex? Magnam omnis tempora molestiae eius assumenda soluta ratione ea.
                    Nostrum incidunt sed unde. Excepturi repellendus, quaerat, libero deleniti explicabo quibusdam saepe
                    facere sunt facilis blanditiis eligendi pariatur. Quae dicta pariatur doloremque eligendi ratione
                    consequatur aliquam! Animi vitae commodi rerum. Rerum temporibus, molestiae dolore ducimus
                    consectetur, quod voluptatum architecto asperiores cumque sit repudiandae consequatur quos animi aut
                    provident in nam, nulla aspernatur ipsum eveniet dolorem at aliquam? Dolor, maxime aperiam.
                </div>
                {/* <div className={cx('related-post')}>
                    <Typography.Title className={cx('title')}>Related Posts</Typography.Title>
                    <Divider />
                    <div className={cx('list-replate-post')}>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                    </div>
                </div> */}
            </LayoutBlog>
        </>
    );
}

export default PostDetail;
