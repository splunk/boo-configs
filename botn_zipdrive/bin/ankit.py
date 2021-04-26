#!/usr/bin/env python
# coding=utf-8
#
# Copyright © 2011-2015 Splunk, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License"): you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

from __future__ import absolute_import, division, print_function, unicode_literals
import os,sys
import time
import json

splunkhome = os.environ['SPLUNK_HOME']
sys.path.append(os.path.join(splunkhome, 'etc', 'apps', 'botn_zipdrive', 'bin', 'lib'))
from splunklib.searchcommands import dispatch, GeneratingCommand, Configuration, Option, validators
from splunklib import six
from splunklib.six.moves import range
import requests


@Configuration()
class AnkitCommand(GeneratingCommand):

    firstname = Option(require=True, validate=validators.OptionName())
    lastname = Option(require=True, validate=validators.OptionName())
    botn = Option(require=False, validate=validators.Boolean())

    def generate(self):
        url = 'http://api.icndb.com/jokes/random?limitTo=nerdy&firstName={}&lastName={}'.format(self.firstname, self.lastname)
        response = requests.get(url)
        value = json.loads(response.text)['value']
        joke = value['joke']
        
        botn = self.botn
        botn_response_value = ""
        conc_string = joke
        if botn==True:
            botn_url = 'http://botn.splunk.link:8000/ep'
            response = requests.get(botn_url)
            botn_response_value = response.text
            conc_string = conc_string+ "\n BOTN response: " + response.text
        
        yield {'_time': time.time(), '_raw':conc_string}

dispatch(AnkitCommand, sys.argv, sys.stdin, sys.stdout, __name__)