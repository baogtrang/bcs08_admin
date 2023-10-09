import React, { useEffect, useState } from 'react';
import { userServ } from '../../api/api';
import { Button, Table, Tag, message } from 'antd';
import Spinner from '../../components/Spinner';

function TableUser() {
    // hold data from api
    const [userList, setUserList] = useState([]); // [1, 2, 3, 4, 5]
    // hold spinner state
    const [isLoading, setIsLoading] = useState(false); // [1, 2, 3, 4, 5]

    /* 
    1. tạo delete button trong thead và tbody
    2. viết servie để gọi api xóa user
    3. gắn vào button
    4. fetch getList sau khi xóa
    */

    function fetchUserList () {
        setIsLoading(true);
        userServ
            .getList()
            //the userList state is updated with the content of the response.
            .then((res) => {
                setIsLoading(false); //bật spinner
                setUserList(res.data.content);
            })
            .catch((err) => {
                setIsLoading(false); //tắt spinner
                console.log(err);
            });
    };
    
    // call api
    useEffect(() => {
        fetchUserList();        
    }, []);

    let handleDelete = (taiKhoan) => {
        userServ
            .delete(taiKhoan)
            .then((res) => {
                fetchUserList();
                message.success("Xóa thành công");
            })
            .catch((err) => {
                message.error(err.response.data.content);
            });
    }

    let columnsHeader=[
        // mỗi object là 1 Header
        {
            title: 'Username',
            dataIndex: 'hoTen', // key dung de map voi data
            key: 'hoTen',
        },
        {
            title: 'Email',
            dataIndex: 'email', 
            key: 'email',
        },
        {
            title: 'Type',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            render: (text /*đại diện cho dataIndex */) => { 
                if (text==="KhachHang"){
                    return <Tag color="green">Khách hàng</Tag>;
                } else  {
                    return <Tag color="red">Quản trị</Tag>;
                }
            },
        },
        {
            title: 'Action',
            render: (_, user) => {
                return (
                    <Button 
                        onClick={() => handleDelete(user.taiKhoan)}
                        className="bg-red-500">
                        Delete
                    </Button>
                )
            }
        },
        
    ]

    return (
        <div>
            {isLoading && <Spinner/>}
            <Table columns={columnsHeader} dataSource={userList}/>;
        </div>
    );
}

export default TableUser;
// table antd