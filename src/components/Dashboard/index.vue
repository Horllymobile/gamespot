<template>
    <div class="container dashboard_container">
        <div class="admin_nav">
            <ul>
                <li><router-link to="/dashboard/add_posts">Add Post</router-link></li>
                <li><router-link to="/dashboard/list_posts">Manage Post</router-link></li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>