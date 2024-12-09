import React from 'react';

const Delete = () => {
  const baseUrl = 'https://acb-api.algoritmika.org/api/transaction';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.deleteId.value;

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert(` ID ${id} deleted successfully.`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="form-section">
      <h2>Delete Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="deleteId" placeholder="Enter ID" required />
        <button type="submit">Delete</button>
      </form>
    </section>
  );
};

export default Delete;
