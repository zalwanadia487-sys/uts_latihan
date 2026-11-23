@props([
    'type' => 'radio', 'type2' => 'checkbox',
    'name' => '',
    'id' => '',
    'value' => '',
    'checked' => false,
    'label' => '',
])
<input type="{{ $type }}" name="{{ $name }}" id="{{ $id }}" value="{{ $value }}"
    @if ($checked) checked @endif>
{{ $label }}