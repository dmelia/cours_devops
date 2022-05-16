#!/bin/bash

if [[ "$EUID" != 0 ]]; then
  echo "Ce script doit être exécuté avec 'sudo'"
  exit 1
fi

apt update -y && apt upgrade -y

apt install ansible -y
apt install sshpass -y

cp /shared/ansible.cfg /etc/ansible/ansible.cfg

ansible-playbook /shared/playbook.yml -i /shared/hosts