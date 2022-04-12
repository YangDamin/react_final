
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "../Common/Header.js";
import { Link, useParams } from 'react-router-dom';
import { pointInsideRect } from '@fullcalendar/react';

const BoardDetail = () => {


  const { postid } = useParams();

  const [post, setPost] = useState([]);

  console.log(postid);
  
  useEffect(()=>{
    const result = axios({
      url: `http://localhost:8080/post/detail/${postid}`,
      method: 'get'
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setPost(res.data);
    });
    console.log("##################"+postid);
  }, [postid]);

  

    return (
  
      <>

       <Header></Header>
        <Container className="mt--7" fluid>
         
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <tbody>
                <Table className="align-items-center table-flush" responsive>
                <tr>
                      <div class="container">
                        <h2 class="my-3 border-bottom pb-2">
                         제목 : {post.title}
                         <br />
                         작성자 : {post.userId}
                         <br />
                         내용 : {post.content}
                         </h2>
                      </div>
                      </tr>
                </Table>
                </tbody>
                    <Link to="/"> <button type="button" class="btn btn-primary" >목록</button>
                    </Link>
              </Card>
            </div>
          </Row>
        </Container>
  
      </>
  
    );
  };

  export default BoardDetail;