(function (_, Kotlin, $module$kotlinx_serialization_runtime_js) {
  'use strict';
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Json = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.Json;
  var get_list = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.get_list_gekvwj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var LocalDateTime$Companion = JSJoda.LocalDateTime;
  var YearMonth$Companion = JSJoda.YearMonth;
  var equals = Kotlin.equals;
  function LocalDateTimeSerializer() {
    LocalDateTimeSerializer_instance = this;
  }
  Object.defineProperty(LocalDateTimeSerializer.prototype, 'descriptor', {
    get: function () {
      return internal.StringDescriptor;
    }
  });
  LocalDateTimeSerializer.prototype.deserialize_nts5qn$ = function (decoder) {
    return LocalDateTime(decoder.decodeString());
  };
  LocalDateTimeSerializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    encoder.encodeString_61zpoe$(obj.toString());
  };
  LocalDateTimeSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocalDateTimeSerializer',
    interfaces: [KSerializer]
  };
  var LocalDateTimeSerializer_instance = null;
  function LocalDateTimeSerializer_getInstance() {
    if (LocalDateTimeSerializer_instance === null) {
      new LocalDateTimeSerializer();
    }
    return LocalDateTimeSerializer_instance;
  }
  function Transfer(time, partner, description, amount) {
    Transfer$Companion_getInstance();
    this.time = time;
    this.partner = partner;
    this.description = description;
    this.amount = amount;
  }
  function Transfer$Companion() {
    Transfer$Companion_instance = this;
  }
  Transfer$Companion.prototype.serializer = function () {
    return Transfer$$serializer_getInstance();
  };
  Transfer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transfer$Companion_instance = null;
  function Transfer$Companion_getInstance() {
    if (Transfer$Companion_instance === null) {
      new Transfer$Companion();
    }
    return Transfer$Companion_instance;
  }
  function Transfer$$serializer() {
    this.descriptor_6lh1nw$_0 = new SerialClassDescImpl('sample.Transfer', this);
    this.descriptor.addElement_ivxn3r$('time', false);
    this.descriptor.addElement_ivxn3r$('partner', false);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('amount', false);
    Transfer$$serializer_instance = this;
  }
  Object.defineProperty(Transfer$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_6lh1nw$_0;
    }
  });
  Transfer$$serializer.prototype.serialize_awe97i$ = function (encoder, obj) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, LocalDateTimeSerializer_getInstance(), obj.time);
    output.encodeStringElement_bgm7zs$(this.descriptor, 1, obj.partner);
    output.encodeStringElement_bgm7zs$(this.descriptor, 2, obj.description);
    output.encodeIntElement_4wpqag$(this.descriptor, 3, obj.amount);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Transfer$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, LocalDateTimeSerializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, LocalDateTimeSerializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeStringElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = input.decodeStringElement_3zr2iy$(this.descriptor, 2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = input.decodeIntElement_3zr2iy$(this.descriptor, 3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Transfer_init(bitMask0, local0, local1, local2, local3, null);
  };
  Transfer$$serializer.prototype.childSerializers = function () {
    return [LocalDateTimeSerializer_getInstance(), internal.StringSerializer, internal.StringSerializer, internal.IntSerializer];
  };
  Transfer$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Transfer$$serializer_instance = null;
  function Transfer$$serializer_getInstance() {
    if (Transfer$$serializer_instance === null) {
      new Transfer$$serializer();
    }
    return Transfer$$serializer_instance;
  }
  function Transfer_init(seen1, time, partner, description, amount, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Transfer.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('time');
    else
      $this.time = time;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('partner');
    else
      $this.partner = partner;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('description');
    else
      $this.description = description;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('amount');
    else
      $this.amount = amount;
    return $this;
  }
  Transfer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transfer',
    interfaces: []
  };
  Transfer.prototype.component1 = function () {
    return this.time;
  };
  Transfer.prototype.component2 = function () {
    return this.partner;
  };
  Transfer.prototype.component3 = function () {
    return this.description;
  };
  Transfer.prototype.component4 = function () {
    return this.amount;
  };
  Transfer.prototype.copy_g4pso$ = function (time, partner, description, amount) {
    return new Transfer(time === void 0 ? this.time : time, partner === void 0 ? this.partner : partner, description === void 0 ? this.description : description, amount === void 0 ? this.amount : amount);
  };
  Transfer.prototype.toString = function () {
    return 'Transfer(time=' + Kotlin.toString(this.time) + (', partner=' + Kotlin.toString(this.partner)) + (', description=' + Kotlin.toString(this.description)) + (', amount=' + Kotlin.toString(this.amount)) + ')';
  };
  Transfer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.partner) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    return result;
  };
  Transfer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.time, other.time) && Kotlin.equals(this.partner, other.partner) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.amount, other.amount)))));
  };
  function balance($receiver) {
    var tmp$;
    var sum = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.amount | 0;
    }
    return sum;
  }
  function toJson($receiver) {
    return Json.Companion.stringify_tf03ej$(get_list(Transfer$Companion_getInstance().serializer()), $receiver);
  }
  function balanceByAccount($receiver) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.partner;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var destination_0 = LinkedHashMap_init_0(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      destination_0.put_xwzc9p$(element_0.key, balance(element_0.value));
    }
    return destination_0;
  }
  function byMonth($receiver) {
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.time.yearMonth;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    return destination;
  }
  function LocalDateTime(text) {
    return new LocalDateTime_0(LocalDateTime$Companion.parse(text));
  }
  function LocalDateTime_0(js) {
    this.js = js;
  }
  Object.defineProperty(LocalDateTime_0.prototype, 'yearMonth', {
    get: function () {
      return new YearMonth(YearMonth$Companion.from(this.js));
    }
  });
  LocalDateTime_0.prototype.toString = function () {
    return this.js.toString();
  };
  LocalDateTime_0.prototype.equals = function (other) {
    return Kotlin.isType(other, YearMonth) && equals(other.js, this.js);
  };
  LocalDateTime_0.prototype.hashCode = function () {
    return this.js.hashCode();
  };
  LocalDateTime_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalDateTime',
    interfaces: []
  };
  function YearMonth(js) {
    this.js = js;
  }
  Object.defineProperty(YearMonth.prototype, 'year', {
    get: function () {
      return this.js.year();
    }
  });
  Object.defineProperty(YearMonth.prototype, 'monthValue', {
    get: function () {
      return this.js.monthValue();
    }
  });
  YearMonth.prototype.toString = function () {
    return this.js.toString();
  };
  YearMonth.prototype.equals = function (other) {
    return Kotlin.isType(other, YearMonth) && other.js.equals(this.js);
  };
  YearMonth.prototype.hashCode = function () {
    return (this.year * 12 | 0) + this.monthValue | 0;
  };
  YearMonth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YearMonth',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  Object.defineProperty(package$sample, 'LocalDateTimeSerializer', {
    get: LocalDateTimeSerializer_getInstance
  });
  Object.defineProperty(Transfer, 'Companion', {
    get: Transfer$Companion_getInstance
  });
  Object.defineProperty(Transfer, '$serializer', {
    get: Transfer$$serializer_getInstance
  });
  package$sample.Transfer_init_f1h8jv$ = Transfer_init;
  package$sample.Transfer = Transfer;
  package$sample.balance = balance;
  package$sample.transfersToJson = toJson;
  package$sample.balanceByAccount = balanceByAccount;
  package$sample.byMonth = byMonth;
  package$sample.localDateTimeFromText = LocalDateTime;
  package$sample.LocalDateTime = LocalDateTime_0;
  package$sample.YearMonth = YearMonth;
  LocalDateTimeSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  Transfer$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Kotlin.defineModule('reactjssample', _);
  return _;
}(module.exports, require('kotlin'), require('kotlinx-serialization-runtime-js')));

//# sourceMappingURL=reactjssample.js.map
