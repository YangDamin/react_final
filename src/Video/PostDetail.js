
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


  const params = window.location.pathname;
  const id = params.substring(params.lastIndexOf('/') + 1);

  const [post, setPost] = useState([]);
  useEffect(() => {
    axios({
      url: `http://localhost:8080/post/detail`,
      method: 'get',
      params: { id: id }
    }).then((res) => {
      console.log("res DATA 확인");
      console.log(res.data);
      setPost(res.data);
    });
  },
  []);

  

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