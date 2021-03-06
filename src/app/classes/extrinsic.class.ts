/*
 * Polkascan Explorer GUI
 *
 * Copyright 2018-2020 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * extrinsic.class.ts
 */

import {DocumentCollection, DocumentResource, Resource} from 'ngx-jsonapi';
import {Account} from './account.class';
import {Event} from './event.class';

export class Extrinsic extends Resource {
  public attributes = {
    module_id: 'module_id',
    call_id: 'call_id',
    extrinsic_hash: 'extrinsic_hash'
  };

   public relationships = {
        account: new DocumentResource<Account>(),
        events: new DocumentCollection<Event>(),
    };
}
