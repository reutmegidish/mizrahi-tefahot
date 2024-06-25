import './AdminPanel.css'

const AdminPanel = () => {
  return (
    <section className="admin-container d-flex flex-column align-center padding gap">
      <div className="admin-panel-img-container d-flex justify-center">
        <img
          src="./images/admin-panel-img.png"
          alt="Admin Panel Image"
          className="admin-panel-img "
        />
      </div>
    </section>
  )
}

export default AdminPanel
