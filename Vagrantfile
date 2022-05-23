# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.provider "hyperv" do |hv|
    hv.memory = 4096
    hv.cpus = 2
  end
  config.vm.define "ansible" do |ansible|
    ansible.vm.box = "bento/ubuntu-18.04"
        ansible.vm.network "private_network", ip: "192.168.56.11", use_dhcp_assigned_default_route: true
	ansible.vm.synced_folder "ansible/", "/shared"
	#ansible.vm.provision "shell", inline: "/bin/sh /shared/install.sh"
  end
  config.ssh.username = "vagrant"
  config.ssh.password = "vagrant"
end