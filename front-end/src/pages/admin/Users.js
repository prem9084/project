import React from "react";
import Layout from "../../components/layout/Layout";
import AdminManue from "../../components/layout/AdminManue";

const Users = () => {
  return (
    <>
      <Layout title="Deshboard - All Users">
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminManue />
            </div>
            <div className="col-md-9">
              <h1>Create Product</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Users;
