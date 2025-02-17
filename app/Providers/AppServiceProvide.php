// AppServiceProvider.php
use Filament\Support\Facades\FilamentView;
use Illuminate\Support\Facades\Vite;

public function boot()
{
  FilamentView::registerRenderHook(
    'panels::head.end',
    fn () => Vite::useHotFile('filament.hot')
      ->withEntryPoints(['resources/css/filament.css'])
  );

  FilamentView::registerRenderHook(
    'panels::scripts.after',
    fn () => Vite::useHotFile('filament.hot')
      ->withEntryPoints(['resources/js/filament.js'])
  );
}