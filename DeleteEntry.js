function deleteEntry(id) {
    fetch(`${scriptURL}?id=${id}`, { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          swal("Deleted", "Entry deleted successfully.", "success");
          // Optionally refresh the results
          document.getElementById("searchButton").click();
        } else {
          swal("Error", "Failed to delete entry.", "error");
        }
      })
      .catch(error => {
        console.error("Error deleting entry:", error);
      });
  }
  