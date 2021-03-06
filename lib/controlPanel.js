"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['metrics'], ['adhoc_filters'], ['custom_filters'], ['groupby'], ['row_limit']]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [['color_scheme', 'label_colors'], [{
      name: 'treemap_ratio',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Ratio'),
        renderTrigger: true,
        isFloat: true,
        default: 0.5 * (1 + Math.sqrt(5)),
        // d3 default, golden ratio
        description: (0, _core.t)('Target aspect ratio for treemap tiles.')
      }
    }], [{
      name: 'number_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Number format'),
        renderTrigger: true,
        default: 'SMART_NUMBER',
        choices: _core.D3_FORMAT_OPTIONS,
        description: _core.D3_FORMAT_DOCS
      }
    }]]
  }],
  controlOverrides: {
    color_scheme: {
      renderTrigger: false
    }
  }
};
exports.default = _default;