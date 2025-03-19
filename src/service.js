import axios from 'axios';
import API_BASE_URL from './config.js';


export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)
    return result.data;
  },
  addTask: async (name) => {
    console.log('addTask', name);
    try {
      const response = await axios.post(`/addTask`, { name });
      return response.data; // מחזיר את המידע שהשרת מחזיר לאחר ההוספה
    } catch (error) {
      console.error('Error adding task:', error);
      throw error; // זורק שגיאה במקרה של כישלון
    }

  },
 

  
  deleteTask: async (id) => {
    console.log('deleteTask', id);
    try {

      const response = await axios.delete(`/items/${id}`);
      return response.data; // מחזיר את המידע שהשרת מחזיר לאחר המחיקה
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error; // זורק שגיאה במקרה של כישלון
    }
  }
,
  updateTask: async (id, updatedData) => {
    console.log('updateTask', id, updatedData);
    try {
      const response = await axios.put(`$/items/${id}`, updatedData);
      return response.data; // מחזיר את המידע שהשרת מחזיר לאחר העדכון
    } catch (error) {
      console.error('Error updating task:', error);
      throw error; // זורק שגיאה במקרה של כישלון
    }
  },
  aaa:()=>{}
,

  setCompleted: async (id, isComplete) => {
    try {////http://localhost:5074/setCompleted?id=2&isComplete=true
      const response = await axios.put(`/setCompleted?id=${id}&isComplete=${isComplete}`);
      return response.data; // מחזיר את המידע שהשרת מחזיר לאחר העדכון
    } catch (error) {
      console.error('Error updating task:', error);
      throw error; // זורק שגיאה במקרה של כישלון
    }

  }
}



