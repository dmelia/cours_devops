# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

  config.vm.define "main" do |main|
    main.vm.box = "generic/ubuntu2110"
	main.vm.network "private_network", ip: "192.168.56.12", use_dhcp_assigned_default_route: true
	main.vm.synced_folder "main/", "/main"
  end
end