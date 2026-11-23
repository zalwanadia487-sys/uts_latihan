@props([
    'variant' => 'primary',
    'type' => '',
])

<button type="{{ $type }}" class="btn btn-{{ $variant }}"> {{$slot}} </button>
