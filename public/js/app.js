const api = axios.create({
  // baseURL: 'http://localhost:3000/api/'
  baseURL: `${location.protocol}//${location.host}/api/`
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

const app = Vue.createApp({

    data () {
        return {

          // Task data default
          formTask: {
            title: '',
            description: ''
          },

          viewTask: {},

          formTaskErrors: {},
          // formTaskErrors: [],

          // Columns of task statuses-
          columns: [
            
            // Column-Upcoming
            {
              title: 'Upcoming',
              items: [
                {
                  _id: 1,
                  title: 'Col 1 texto 1',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
                },
                {
                  _id: 2,
                  title: 'Col 1 texto 2',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png'
                }
              ]
            },

            // Column-In Progress
            {
              title: 'In Progress',
              items: [
                {
                  _id: 3,
                  title: 'Col 1 texto 1',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
                },
                {
                  _id: 4,
                  title: 'Col 1 texto 2',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png'
                }
              ]
            },

            // Column-On Hold
            {
              title: 'On Hold',
              items: [
                {
                  _id: 5,
                  title: 'Col 3 texto 1',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
                },
                {
                  _id: 6,
                  title: 'Col 3 texto 2',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png'
                }
              ]
            },

            // Column-Completed
            {
              title: 'Completed',
              items: [
                {
                  _id: 7,
                  title: 'Col 4 texto 1',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
                },
                {
                  _id: 8,
                  title: 'Col 4 texto 2',
                  checkbox: false,
                  avatar: 'https://bootdey.com/img/Content/avatar/avatar5.png'
                }
              ]
            },
          ],

          // Initial value for column index 
          columnIndex: null,  
        }
    },

    mounted () {
        console.log('Vue mounted')
    },

    methods: {
      // Add task to column  
      async saveTask () {
        
        this.formTaskErrors = {}

        if (this.formTask.title === '') {
          this.formTaskErrors.title = "Title required"
          console.log ('Saí do title') 
          return
        }        
        // if(this.formTask.title === '') {
        //   this.formTaskErrors.push("Title required")
        //   console.log("title required")
        // }

        
        if (this.formTask.description === '') {
          this.formTaskErrors.description = "Description required"
          console.log ('Saí da description')
          return
        }  
        // if(this.formTask.description === '') {
        //   this.formTaskErrors.push("Description required")
        //   // console.log("description required")m 
        // }  

        if (Object.keys(this.formTaskErrors).length === 0) {
          this.columns[this.columnIndex].items.push({
            _id: Date.now(),
            title: this.formTask.title,
            description: this.formTask.description,
            avatar: 'https://bootdey.com/img/Content/avatar/avatar6.png'
          })

          try {
            console.log('passo 1')
            await api.post('tasks', this.formTask).then(res => console.log('passo 2'))
            console.log('passo 3')
          }
          catch (e) {
            console.error(e)
          }

          this.clearFormTask()
                
          $('#addTaskModal').modal('hide')
        }       
        
      },

      clearFormTask () {
        // Clear input fields 
        this.formTask = {
          title: '',
          description: ''
        }
        
        this.formTaskErrors = {}
      },

      showTask (item) {
        this.viewTask = item
      },

      editTask (item, columnIndex) {
        this.formTask = item
        this.columnIndex = columnIndex
      }
    }
})
  
// window.addEventListener('load', function..)
window.onload = function () {
  app.mount('#app')
}

// 1. app.js
// 2. v-avatar.vue.js
// 3. window.onload -> app.mount('#app')
