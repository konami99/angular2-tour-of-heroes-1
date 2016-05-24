# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server 'ec2-54-191-241-153.us-west-2.compute.amazonaws.com', user: 'deploy', roles: %w{app db web}
# server 'example.com', user: 'deploy', roles: %w{app web}, other_property: :other_value
# server 'db.example.com', user: 'deploy', roles: %w{db}

set :branch, 'webpack'

# role-based syntax
# ==================

# Defines a role with one or multiple servers. The primary server in each
# group is considered to be the first unless any  hosts have the primary
# property set. Specify the username and a domain or IP for the server.
# Don't use `:all`, it's a meta role.

role :app, %w{deploy@ec2-54-191-241-153.us-west-2.compute.amazonaws.com}
role :web, %w{deploy@ec2-54-191-241-153.us-west-2.compute.amazonaws.com}
role :db,  %w{deploy@ec2-54-191-241-153.us-west-2.compute.amazonaws.com}



# Configuration
# =============
# You can set any configuration variable like in config/deploy.rb
# These variables are then only loaded and set in this stage.
# For available Capistrano configuration variables see the documentation page.
# http://capistranorb.com/documentation/getting-started/configuration/
# Feel free to add new variables to customise your setup.



# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult the Net::SSH documentation.
# http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start
#
# Global options
# --------------
#  set :ssh_options, {
#    keys: %w(/home/rlisowski/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }
#
# The server-based syntax can be used to override options:
# ------------------------------------
server 'deploy@ec2-54-191-241-153.us-west-2.compute.amazonaws.com', {
   user: 'deploy',
   roles: %w{web app},
   ssh_options: {
     keys: %w(/Users/rchou/.ssh/aws1.pem),
     forward_agent: false,
     auth_methods: %w(publickey password),
   }
}