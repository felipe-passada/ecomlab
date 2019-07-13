<template>
    <div>
        <h1>Users</h1>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-bind:class="[{disabled: !pagination.prev_page_url}]"
                class="page-item"><a class="page-link" href="#"
                @click="fecthUsers(pagination.prev_page_url)">Previous</a></li>

                <li class="page-item disabled"><a class="page-link text-dark" href="#">
                {{pagination.current_page}} of {{pagination.last_page}}</a></li>

                <li v-bind:class="[{disabled: !pagination.next_page_url}]"
                class="page-item"><a class="page-link" href="#"
                @click="fecthUsers(pagination.next_page_url)">Next</a></li>
            </ul>
        </nav>

        <table class="table table-bordered table-striped table-hover mt-2">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="u in users" v-bind:key="u.id">
                <th>{{ u.id }}</th>
                <th>{{ u.name }}</th>
                <th>{{ u.email }}</th>
                <th>{{ u.profile }}</th>
                <th>{{ u.status }}</th>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            users: [],
            user: {
                id: '',
                name: '',
                email: '',
                profile: '',
                status: ''
            },
            user_id: '',
            pagination: {}
        }
    },

    created () {
        this.fecthUsers();
    },

    methods: {
        fecthUsers (page_url) {
            let vm = this;
            page_url = page_url || '/api/users'
            fetch(page_url)
                .then(res => res.json())
                .then(res => {
                    this.users = res.data;
                    vm.makePagination(res.meta, res.links);
                })
                .catch(err => console.log(err));
        },
        makePagination(meta, links) {
            let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev
            };

            this.pagination = pagination;
        }
    },

    computed: {
  	list() {
      return _.orderBy(this.users, this.name.orderBy); 
    },
  }
}
</script>